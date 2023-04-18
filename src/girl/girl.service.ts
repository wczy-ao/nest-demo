import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
  getGirls(): string {
    return '请求成功';
  }
  addGirl() {
    return {
      code: 200,
      data: { id: 1, name: '大梨', age: 27 },
      msg: '女孩添加成功',
    };
  }
  getGirlById(id: number) {
    let reJson: any = {};
    switch (id) {
      case 1:
        reJson = { id: 1, name: '翠花', age: 18 };
        break;
      case 2:
        reJson = { id: 1, name: '小红', age: 20 };
        break;
      case 3:
        reJson = { id: 1, name: '大丫', age: 23 };
        break;
    }
    return reJson;
  }
}
