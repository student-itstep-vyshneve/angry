const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Physics,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Physics.Acts.SetIterations,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Acts.ScrollToObject,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Exps.min,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Behaviors.Physics.Acts.ApplyImpulseAtAngle,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Physics: 0},
	{Ground: 0},
	{Box1: 0},
	{Text: 0},
	{Pig: 0},
	{Touch: 0},
	{CatapultBlock: 0},
	{Block: 0},
	{Sprite: 0},
	{RestartButton: 0},
	{IsAiming: 0}
];

self.InstanceType = {
	Ground: class extends self.ITiledBackgroundInstance {},
	Box1: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Pig: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	CatapultBlock: class extends self.ISpriteInstance {},
	Block: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	RestartButton: class extends self.IButtonInstance {}
}