
import { test, expect } from "@playwright/experimental-ct-react";
import App2083 from "./App2083.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2083 />);
  await expect(component).toContainText("Learn React");
});
