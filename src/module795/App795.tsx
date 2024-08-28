
import { test, expect } from "@playwright/experimental-ct-react";
import App795 from "./App795.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App795 />);
  await expect(component).toContainText("Learn React");
});
