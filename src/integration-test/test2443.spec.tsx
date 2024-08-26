
import { test, expect } from "@playwright/experimental-ct-react";
import App2443 from "../example/App2443.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2443 />);
  await expect(component).toContainText("Learn React");
});
