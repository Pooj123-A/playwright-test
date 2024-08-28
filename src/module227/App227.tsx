
import { test, expect } from "@playwright/experimental-ct-react";
import App227 from "./App227.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App227 />);
  await expect(component).toContainText("Learn React");
});
