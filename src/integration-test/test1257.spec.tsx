
import { test, expect } from "@playwright/experimental-ct-react";
import App1257 from "../example/App1257.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1257 />);
  await expect(component).toContainText("Learn React");
});
