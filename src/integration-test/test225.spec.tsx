
import { test, expect } from "@playwright/experimental-ct-react";
import App225 from "../example/App225.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App225 />);
  await expect(component).toContainText("Learn React");
});
