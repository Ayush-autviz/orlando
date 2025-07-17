import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { X, ExternalLink, RefreshCw } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

interface WebViewScreenProps {
  route: {
    params: {
      url: string;
      title?: string;
    };
  };
}

const WebViewScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { url, title } = route.params as { url: string; title?: string };
  const [webViewRef, setWebViewRef] = React.useState<WebView | null>(null);
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState(url);

  const handleClose = () => {
    navigation.goBack();
  };

  const handleRefresh = () => {
    webViewRef?.reload();
  };

  const handleGoBack = () => {
    if (canGoBack) {
      webViewRef?.goBack();
    }
  };

  const handleGoForward = () => {
    if (canGoForward) {
      webViewRef?.goForward();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <X size={24} color="#374151" />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <ExternalLink size={16} color="#6b7280" />
          <Text style={styles.title} numberOfLines={1}>
            {title || 'Website'}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
          <RefreshCw size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* URL Bar */}
      <View style={styles.urlBar}>
        <Text style={styles.urlText} numberOfLines={1}>
          {currentUrl}
        </Text>
      </View>

      {/* Navigation Controls */}
      <View style={styles.navigationControls}>
        <TouchableOpacity
          style={[styles.navButton, !canGoBack && styles.navButtonDisabled]}
          onPress={handleGoBack}
          disabled={!canGoBack}
        >
          <Text style={[styles.navButtonText, !canGoBack && styles.navButtonTextDisabled]}>
            ← Back
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.navButton, !canGoForward && styles.navButtonDisabled]}
          onPress={handleGoForward}
          disabled={!canGoForward}
        >
          <Text style={[styles.navButtonText, !canGoForward && styles.navButtonTextDisabled]}>
            Forward →
          </Text>
        </TouchableOpacity>
      </View>

      {/* WebView */}
      <WebView
        ref={setWebViewRef}
        source={{ uri: url }}
        style={styles.webView}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url);
        }}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  closeButton: {
    padding: 8,
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    flex: 1,
  },
  refreshButton: {
    padding: 8,
    marginLeft: 12,
  },
  urlBar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  urlText: {
    fontSize: 12,
    color: '#6b7280',
  },
  navigationControls: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    gap: 16,
  },
  navButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  navButtonDisabled: {
    backgroundColor: '#f3f4f6',
    borderColor: '#e5e7eb',
  },
  navButtonText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  navButtonTextDisabled: {
    color: '#9ca3af',
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
  },
});

export default WebViewScreen;
