import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  keys: string[];
  values: {}[];
  subKeys = {};
  objectKeys = Object.keys;
  subKeysArr: any;

  ngOnInit() {
    const obj = [
      {
        'a': 1,
        'b': 2,
        'c': 3
      },
      {
        'd': 4,
        'e': 5,
        'f': 6
      }
    ];

    const obj2 = {
      'key 1': {
        'a': 1, 'b': 2, 'c': 3
      },
      'key 2': {
        'a': 4, 'b': 5, 'c': 6
      }
    };

    // this.modifyJSON(obj);

    // this.modifyJSON2(obj);

    this.tablePlot(obj2);
  }
  tablePlot(JSONobj) {
    this.keys = Object.keys(JSONobj);
    this.values = Object.values(JSONobj);

    Object.keys(this.values).forEach(
      item => {
        console.log(item);
      }
    );

    )
    this.keys.forEach(
      key => {
        //console.log(JSONobj[key]);

        Object.keys(JSONobj[key]).forEach(
          subkey => {
            if (subkey in this.subKeys === false) {
              this.subKeys[subkey] = '';
            }
          }
        );

      }
    );
    console.log('subkeys', this.objectKeys(this.subKeys));
    this.subKeysArr = this.objectKeys(this.subKeys);

  }
  modifyJSON2(JSONobj) {
    const newArr = [];
    JSONobj.forEach(
      element => {
        const newObj = {};
        const keys = Object.keys(element);
        keys.forEach(
          key => {
            const newKey: string = element[key];
            newObj[newKey] = key;
          }
        );
        // const values = Object.values(element);

        newArr.push(newObj);
      }
    );

    console.log(newArr);
  }
  modifyJSON(JSONobj) {

    const newArr = [];

    JSONobj.forEach(element => {
      const newObj = {};

      let keyConcat = '';
      let valueConcat = '';
      console.log('Element', element);
      const keys = Object.keys(element);
      const values = Object.values(element);
      console.log('keys', keys, 'values', values);

      keys.forEach(
        key => {
          keyConcat += key;
        }
      );
      values.forEach(
        value => {
          valueConcat += value;
        }
      );
      console.log('key concatinated :', keyConcat, ' value concatinated :', valueConcat);
      newObj[keyConcat] = valueConcat;

      newArr.push(newObj);
    });

    console.log(newArr);


  }
}
