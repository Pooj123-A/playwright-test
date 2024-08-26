
import { test, expect } from "@playwright/experimental-ct-react";
import App1353 from "../example/App1353.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1353 />);
  await expect(component).toContainText("Learn React");
});
