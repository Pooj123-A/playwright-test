
import { test, expect } from "@playwright/experimental-ct-react";
import App373 from "../example/App373.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App373 />);
  await expect(component).toContainText("Learn React");
});
