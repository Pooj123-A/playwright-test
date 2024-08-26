
import { test, expect } from "@playwright/experimental-ct-react";
import App2183 from "../example/App2183.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2183 />);
  await expect(component).toContainText("Learn React");
});
