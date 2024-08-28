
import { test, expect } from "@playwright/experimental-ct-react";
import App47 from "./App47.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App47 />);
  await expect(component).toContainText("Learn React");
});
