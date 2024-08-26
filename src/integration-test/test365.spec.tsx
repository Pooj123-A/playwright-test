
import { test, expect } from "@playwright/experimental-ct-react";
import App365 from "../example/App365.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App365 />);
  await expect(component).toContainText("Learn React");
});
