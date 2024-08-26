
import { test, expect } from "@playwright/experimental-ct-react";
import App59 from "../example/App59.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App59 />);
  await expect(component).toContainText("Learn React");
});
