
import { test, expect } from "@playwright/experimental-ct-react";
import App482 from "../example/App482.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App482 />);
  await expect(component).toContainText("Learn React");
});
