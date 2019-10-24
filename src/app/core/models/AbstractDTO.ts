export abstract class AbstractDTO<TOriginal> {
  public abstract toOriginal(): TOriginal;
}
