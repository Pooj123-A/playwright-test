
import { test, expect } from "@playwright/experimental-ct-react";
import App126 from "../example/App126.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App126 />);
  await expect(component).toContainText("Learn React");
});
