
import { test, expect } from "@playwright/experimental-ct-react";
import App183 from "./App183.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App183 />);
  await expect(component).toContainText("Learn React");
});
