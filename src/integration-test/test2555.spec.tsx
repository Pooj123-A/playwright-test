
import { test, expect } from "@playwright/experimental-ct-react";
import App2555 from "../example/App2555.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2555 />);
  await expect(component).toContainText("Learn React");
});
