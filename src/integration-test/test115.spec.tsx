
import { test, expect } from "@playwright/experimental-ct-react";
import App115 from "../example/App115.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App115 />);
  await expect(component).toContainText("Learn React");
});
