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
  objectValues = Object.values;
  subKeysArr = [];
  valueArray = [];

  company = [];
  frequency = [];
  finalRequiredResult = {};
  JSONarray = [];
  tempObj = {};

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

    const obj3 = {
      pen: {
        'cello': ['blue', 'green', 'red'],
        'parker': ['red', 'yellow', 'blue'],
        'renolds': ['green', 'grey', 'red']
      },
      marker: {
        'a': ['red', 'blue'],
        'b': ['green', 'red'],
        'c': ['black', 'blue']
      }
    };

     this.JSONarray = [
      {
      'name': 'Hello',
      'className': 'red',
      'show': true
      },
      {
      'name': 'Hello1',
      'className': 'blue',
      'show': false
      },
      {
      'name': 'Hello2',
      'className': 'green',
      'show': true
      }
    ];

   // this.modifyJSON(obj);

     // this.modifyJSON2(obj);

     // this.tablePlot(obj2);

    this.modifyJSON3(obj3);
  }


 // const obj ={};
  modifyJSON3(JSONobj) {
  //  const obj ={'pen':['cello',]};
    this.objectKeys(JSONobj).forEach(
      product => {
        const obj = {};
        obj[product] = [];
       obj[product].push(product);


        this.objectKeys(JSONobj[product]).forEach(
          company => {
        //    this.company.push(company);
            obj[product].push(company);

            (JSONobj[product][company]).forEach(
              color => {
                obj[product].push(color);
                 console.log(this.tempObj);
                console.log(product);
                if(this.tempObj[product]) {
                if (this.tempObj[product].includes(color)) {
                 // this.finalRequiredResult[color]['Used'] = [];
                  if (!this.tempObj[product].includes(product)) {
                  this.finalRequiredResult[color]['Used'].push(product);
                  }
                } else {
                  this.finalRequiredResult[color]['Used'] = [];

                }
              }

                // if (this.tempObj[product].includes(color) && this.tempObj[product].inclues(company)) {
                //   this.finalRequiredResult[color]['Company'].push(company);
                // }

                if (color in this.finalRequiredResult) {
                            this.finalRequiredResult[color]['frequency'] += 1;
                          } else {
                            this.finalRequiredResult[color] = {};
                            this.finalRequiredResult[color]['frequency'] = 1;
                          }
              }
            );
         //   obj[product].push(company);

            // if(Arr.includes(color)){
            //   if(color[used].includes(products))
            //   fr[color]['used'].push =products;
            // }

          }
        );


        this.tempObj[product] = obj[product];
      }
    );
    console.log('tempArray', this.tempObj);
   // console.log('products', this.products);
    // console.log('colors', this.colors);
    // console.log('companies', this.company);
    console.log('final JSON', this.finalRequiredResult);
  }
  tablePlot(JSONobj) {
    this.keys = Object.keys(JSONobj);
    this.values = Object.values(JSONobj);

    Object.values(this.values).forEach(
      item => {
        console.log(item);
      }
    );
    this.keys.forEach(
      key => {
        const valueObj = {};
        // console.log(JSONobj[key]);
        Object.keys(JSONobj[key]).forEach(
          subkey => {
            if (subkey in this.subKeys === false) {
              this.subKeys[subkey] = '';
            }
            valueObj[subkey] = JSONobj[key][subkey];
            // this.valueArray[i] = value;
          }
        );
        this.valueArray.push(valueObj);
      }
    );
    console.log('subkeys', this.objectKeys(this.subKeys));
    console.log('value array', this.valueArray);
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
