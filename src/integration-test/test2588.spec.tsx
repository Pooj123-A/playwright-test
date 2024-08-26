
import { test, expect } from "@playwright/experimental-ct-react";
import App2588 from "../example/App2588.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2588 />);
  await expect(component).toContainText("Learn React");
});
