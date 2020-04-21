import { FullnamePipe } from './fullname.pipe';
import { pipe } from 'rxjs';
import { UserModel } from '../UserModel';

describe('FullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullnamePipe();
    expect(pipe).toBeTruthy();
  });
  it('should return fullname',()=>{
    const pipe = new FullnamePipe
    var user : UserModel={firstName:"first",lastName:"last",id:'1',age:20,login:'one',password:'one',isDeleted:true};
    expect(pipe.transform(user)).toEqual("firstlast");
  })
});
