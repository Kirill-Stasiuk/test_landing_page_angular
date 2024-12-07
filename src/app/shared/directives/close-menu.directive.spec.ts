import { CloseMenuDirective } from './close-menu.directive';
import { ElementRef } from "@angular/core"

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('CloseMenuDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new MockElementRef();
    const directive = new CloseMenuDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
