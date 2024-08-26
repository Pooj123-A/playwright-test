
import { test, expect } from "@playwright/experimental-ct-react";
import App323 from "./App323.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App323 />);
  await expect(component).toContainText("Learn React");
});
