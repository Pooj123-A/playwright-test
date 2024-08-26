
import { test, expect } from "@playwright/experimental-ct-react";
import App2303 from "../example/App2303.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2303 />);
  await expect(component).toContainText("Learn React");
});
