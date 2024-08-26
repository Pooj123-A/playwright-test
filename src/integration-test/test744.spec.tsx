
import { test, expect } from "@playwright/experimental-ct-react";
import App744 from "../example/App744.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App744 />);
  await expect(component).toContainText("Learn React");
});
