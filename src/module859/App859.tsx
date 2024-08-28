
import { test, expect } from "@playwright/experimental-ct-react";
import App859 from "./App859.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App859 />);
  await expect(component).toContainText("Learn React");
});
