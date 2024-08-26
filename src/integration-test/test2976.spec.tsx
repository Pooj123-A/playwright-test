
import { test, expect } from "@playwright/experimental-ct-react";
import App2976 from "../example/App2976.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2976 />);
  await expect(component).toContainText("Learn React");
});
