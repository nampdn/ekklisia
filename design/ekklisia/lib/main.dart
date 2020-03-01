/*
*  main.dart
*  Ekklisia
*
*  Created by Nam Pham.
*  Copyright © 2018 [Company]. All rights reserved.
    */

import 'package:ekklisia/authentication_screen_widget/authentication_screen_widget.dart';
import 'package:flutter/material.dart';

void main() => runApp(App());


class App extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
  
    return MaterialApp(
      home: AuthenticationScreenWidget(),
    );
  }
}