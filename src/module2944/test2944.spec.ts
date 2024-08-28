
import { test, expect } from "@playwright/experimental-ct-react";
import App2944 from "./App2944.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2944 />);
  await expect(component).toContainText("Learn React");
});
