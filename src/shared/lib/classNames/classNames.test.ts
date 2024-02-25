import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first arg', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', ['class1', 'class2'])).toBe('someClass class1 class2');
  });

  test('with mods', () => {
    expect(classNames(
      'someClass',
      ['class1'],
      { hovered: true, scrollable: false, undefined },
    )).toBe('someClass class1 hovered');
  });
});
