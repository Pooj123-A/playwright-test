
import { test, expect } from "@playwright/experimental-ct-react";
import App2400 from "../example/App2400.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2400 />);
  await expect(component).toContainText("Learn React");
});
