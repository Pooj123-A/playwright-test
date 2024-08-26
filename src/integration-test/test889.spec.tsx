
import { test, expect } from "@playwright/experimental-ct-react";
import App889 from "../example/App889.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App889 />);
  await expect(component).toContainText("Learn React");
});
