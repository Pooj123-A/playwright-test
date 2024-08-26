
import { test, expect } from "@playwright/experimental-ct-react";
import App435 from "../example/App435.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App435 />);
  await expect(component).toContainText("Learn React");
});
