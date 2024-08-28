
import { test, expect } from "@playwright/experimental-ct-react";
import App2926 from "./App2926.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2926 />);
  await expect(component).toContainText("Learn React");
});
