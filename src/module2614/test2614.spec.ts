
import { test, expect } from "@playwright/experimental-ct-react";
import App2614 from "./App2614.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2614 />);
  await expect(component).toContainText("Learn React");
});
