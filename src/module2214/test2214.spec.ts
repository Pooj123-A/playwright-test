
import { test, expect } from "@playwright/experimental-ct-react";
import App2214 from "./App2214.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2214 />);
  await expect(component).toContainText("Learn React");
});
