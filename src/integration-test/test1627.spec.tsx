
import { test, expect } from "@playwright/experimental-ct-react";
import App1627 from "../example/App1627.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1627 />);
  await expect(component).toContainText("Learn React");
});
