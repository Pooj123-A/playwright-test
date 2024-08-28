
import { test, expect } from "@playwright/experimental-ct-react";
import App2906 from "./App2906.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2906 />);
  await expect(component).toContainText("Learn React");
});
