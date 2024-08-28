
import { test, expect } from "@playwright/experimental-ct-react";
import App949 from "./App949.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App949 />);
  await expect(component).toContainText("Learn React");
});
