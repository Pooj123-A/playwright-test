
import { test, expect } from "@playwright/experimental-ct-react";
import App176 from "../example/App176.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App176 />);
  await expect(component).toContainText("Learn React");
});
