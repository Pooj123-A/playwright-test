
import { test, expect } from "@playwright/experimental-ct-react";
import App942 from "./App942.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App942 />);
  await expect(component).toContainText("Learn React");
});
