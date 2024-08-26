
import { test, expect } from "@playwright/experimental-ct-react";
import App543 from "./App543.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App543 />);
  await expect(component).toContainText("Learn React");
});
