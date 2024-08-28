
import { test, expect } from "@playwright/experimental-ct-react";
import App2310 from "./App2310.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2310 />);
  await expect(component).toContainText("Learn React");
});
