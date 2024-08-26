
import { test, expect } from "@playwright/experimental-ct-react";
import App1495 from "../example/App1495.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1495 />);
  await expect(component).toContainText("Learn React");
});
