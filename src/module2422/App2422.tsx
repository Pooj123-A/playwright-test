
import { test, expect } from "@playwright/experimental-ct-react";
import App2422 from "./App2422.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2422 />);
  await expect(component).toContainText("Learn React");
});
