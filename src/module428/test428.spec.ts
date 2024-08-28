
import { test, expect } from "@playwright/experimental-ct-react";
import App428 from "./App428.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App428 />);
  await expect(component).toContainText("Learn React");
});
