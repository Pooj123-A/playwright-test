
import { test, expect } from "@playwright/experimental-ct-react";
import App254 from "../example/App254.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App254 />);
  await expect(component).toContainText("Learn React");
});
