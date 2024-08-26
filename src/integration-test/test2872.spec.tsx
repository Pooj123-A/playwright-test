
import { test, expect } from "@playwright/experimental-ct-react";
import App2872 from "../example/App2872.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2872 />);
  await expect(component).toContainText("Learn React");
});
