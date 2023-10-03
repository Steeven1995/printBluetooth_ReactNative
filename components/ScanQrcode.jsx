import React from 'react';
import { SafeAreaView, Alert, Dimensions, View} from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';


const App = () => {

  const SCREEN_HEIGHT = Dimensions.get('screen').height
  return (
    <SafeAreaView>
      <View style={{height : SCREEN_HEIGHT}}>
          <CameraScreen
            scanBarcode={true}
            onReadCode={(event)=>Alert.alert('QR CODE FOUND')}
            showFrame={true}
            laserColor="red"
            frameColor="white"
            cameraRatioOverlay={undefined}
            captureButtonImage={undefined}
            captureButtonImageStyle={{}}
            cameraFlipImage={undefined}
            hideControls={undefined}
            torchOnImage={undefined}
            torchOffImage={undefined}
            torchImageStyle={{}}
            onBottomButtonPressed={function (){
              throw new Error('function not implemented');
            }}
          />
      </View>
    </SafeAreaView>
  );
};

export default App;